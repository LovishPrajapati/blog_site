import { FastifyRequest } from 'fastify';

export interface generic {
  success: boolean;
  message: string;
}

export interface IncomingRequest extends FastifyRequest {
  user: string;
}
