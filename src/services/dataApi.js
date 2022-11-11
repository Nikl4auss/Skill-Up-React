import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataApi = createApi({
    reducerPaths: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MTU3Mywicm9sZUlkIjoxfSwiaWF0IjoxNjY4MDkyODc1LCJleHAiOjE2NjgxNzkyNzV9.Sy9szNu8CmYVXhx8teFlHizS3JrRg5rTwW3uomVMQIM';
            /* 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
            eyJkYXRhIjp7InVzZXJJZCI6Mjg3LCJyb2xlSWQiOjF9LCJpYXQiOjE2Njc2MDY4NjgsImV4cCI6MTY2NzY5MzI2OH0.
            x5cfUC0LyhC5Cz0qMoSuSi_Uf9M4DVHPzEfLo-XDAsg';
            este token devolvia error ahi puse arriba el que corresponde al usuario grupo3@alkemy.com contraseña 123qwe.
            ACLARACION: el token se vence y hay que ir cambiandolo mientras este hardcodeado como ahora */

            headers.set('authorization', `Bearer ${token}`);

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => '/auth/me'
        }),
        getUser: builder.query({
            query: (id) => `/users/${id}`
        }),
        getAccounts: builder.query({
            query: () => '/accounts'
        }),
        getUserAccounts: builder.query({
            query: () => '/accounts/me'
        }),
        getAccount: builder.query({
            query: (id) => `/accounts/${id}`
        }),
        getTransactions: builder.query({
            query: () => '/transactions'
        }),
        getTransaction: builder.query({
            query: (id) => `/transactions/${id}`
        }),
        newAccount: builder.mutation({
            query: ({ money, userId }) => ({
                url: '/accounts',
                method: 'POST',
                body: {
                    money,
                    isBlocked: 'false',
                    userId
                }
            })
        }),
        depositCash: builder.mutation({
            query: ({ id, concept, amount }) => ({
                url: `/accounts/${id}`,
                method: 'POST',
                body: {
                    type: 'topup',
                    concept,
                    amount
                }
            })
        }),
        newExpense: builder.mutation({
            query: ({ id, concept, amount }) => ({
                url: `/accounts/${id}`,
                method: 'POST',
                body: {
                    type: 'payment',
                    concept,
                    amount: amount * -1
                }
            })
        }),
        newTransaction: builder.mutation({
            query: ({ amount, concept, date, accountId, userId, toAccountId }) => ({
                url: '/transactions',
                method: 'POST',
                body: {
                    amount,
                    concept,
                    date,
                    type: 'payment',
                    accountId,
                    userId,
                    toAccountId
                }
            })
        })
    })
});

export const {
    useGetMeQuery,
    useGetUserQuery,
    useGetAccounts,
    useGetAccountQuery,
    useGetTransactionsQuery,
    useGetTransactionQuery,
    useNewAccountMutation,
    useDepositCashMutation,
    useNewExpenseMutation,
    useNewTransactionMutation
} = dataApi;
