public class palindrome {
    public static void main(String[] args) {
        String str = "racecar";
        System.out.println(longestSubStr(str));
    }

    public static Integer longestSubStr(String str) {
        Integer dp[][] = new Integer[str.length()][str.length()];
        for (int i = 0; i < str.length(); i++) {
            dp[i][i] = 1;
        }

        for (int length = 2; length <= str.length(); length++) {
            for (int start = 0; start < str.length() - length + 1; start++) {
                int end = start + length - 1;

                if (length == 2 && str.charAt(start) == str.charAt(end)) {
                    dp[start][end] = 2;
                } else if (str.charAt(start) == str.charAt(end)) {
                    dp[start][end] = dp[start + 1][end - 1] + 2;
                } else {
                    dp[start][end] = Math.max(dp[start][end - 1], dp[start + 1][end]);
                }
            }
        }

        return dp[0][str.length() - 1];
    }
}