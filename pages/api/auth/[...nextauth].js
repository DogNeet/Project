import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23liHaj77dRLbCT5a3',
            clientSecret: 'e59b0de578753c8584e16446b50269f3ae066787',
        }),
    ],
    secret: 'vcxza369cmin!!'
};
export default NextAuth(authOptions); 