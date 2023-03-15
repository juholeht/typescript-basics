// with index.ts file we can combine dependencies so that 
// developer doesn't need to import everything separately, e.g:
// import { get, controller } from './decorators';
export * from './controller';
export * from './routes';
export * from './use';
export * from './bodyValidator';