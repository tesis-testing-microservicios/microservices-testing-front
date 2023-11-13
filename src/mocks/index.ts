export function main(): void {
  if (typeof window === 'undefined') {
    const { server } = require('./server');
    server.listen({ onUnhandledRequest: 'warn' });
  } else {
    const { worker } = require('./browser');
    worker.start({ onUnhandledRequest: 'warn' });
  }
}

export function getMSWService() {
  if (typeof window === 'undefined' || process.env.NODE_ENV === 'test') {
    const { server } = require('./server');
    server.resetHandlers();
    server.listen({ onUnhandledRequest: 'warn' });
    return server;
  } else {
    const { worker } = require('./browser');
    worker.resetHandlers();
    worker.start({ onUnhandledRequest: 'warn' });
    return worker;
  }
}

export { rest } from 'msw';
