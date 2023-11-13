import { RequestHandler, rest } from 'msw';

export const makeGetGithubUserMock = () => {
  return rest.get('*/users', (_req, res, ctx) => {
    return res(
      ctx.json({
        company: '@process-street',
      }),
    );
  });
};

export const makeGetGithubRepoMock = () => {
  return rest.get('*/repos', (_req, res, ctx) => {
    return res(
      ctx.json({
        company: '@process-street',
      }),
    );
  });
};

export const GithubMocks = {
  makeGetGithubUserMock,
  makeGetGithubRepoMock,
};

export const defaultHandlers: RequestHandler[] = [
  GithubMocks.makeGetGithubRepoMock(),
];
