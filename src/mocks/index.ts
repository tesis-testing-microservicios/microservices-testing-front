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
    return server;
  } else {
    const { worker } = require('./browser');
    return worker;
  }
}

export { rest } from 'msw';
