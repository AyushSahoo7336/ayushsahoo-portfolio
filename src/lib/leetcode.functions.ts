import { createServerFn } from "@tanstack/react-start";

export const getLeetcodeContest = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) => {
    const d = (data ?? {}) as { username?: string };
    const username = typeof d.username === "string" && d.username.length > 0 ? d.username : "AyushSahoo1";
    return { username };
  })
  .handler(async ({ data }) => {
    const body = {
      query:
        "query($u:String!){userContestRanking(username:$u){rating attendedContestsCount globalRanking}}",
      variables: { u: data.username },
    };
    try {
      const res = await fetch("https://leetcode.com/graphql/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Referer: "https://leetcode.com",
          "User-Agent":
            "Mozilla/5.0 (compatible; PortfolioBot/1.0; +https://leetcode.com)",
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) return { rating: null as number | null };
      const j = (await res.json()) as {
        data?: { userContestRanking?: { rating?: number | null } | null };
      };
      const r = j?.data?.userContestRanking?.rating;
      return { rating: typeof r === "number" ? Math.round(r) : null };
    } catch {
      return { rating: null as number | null };
    }
  });
