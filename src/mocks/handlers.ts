import { RequestHandler, rest } from 'msw';

export const makeGetGithubUserMock = () => {
  return rest.get('*/users/brunoravera', (_req, res, ctx) => {
    console.log('akiiiii');
    return res(
      ctx.json({
        company: '@process-street',
      }),
    );
  });
};

export const GithubMocks = {
  makeGetGithubUserMock,
};

export const defaultHandlers: RequestHandler[] = [
  GithubMocks.makeGetGithubUserMock(),
];
