import { Request, Response, NextFunction } from 'express'

const PAD_LENGTH = 120

function time(): string {
  const d = new Date()
  return [d.getHours(), d.getMinutes(), d.getSeconds()].map((val) => `${val}`.padStart(2, '0')).join(':')
}

export function echo(val: unknown): void {
  console.log(time().padEnd(PAD_LENGTH, '-'))
  console.log(val)
}

export function logRequest(req: Request, res: Response, next?: NextFunction) {
  const { headers, url, method, params, query, body, cookies, signedCookies } = req
  const reqProps = {
    headers,
    url,
    method,
    params,
    query,
    body,
    cookies,
    signedCookies,
  }

  if (next) {
    echo(reqProps)
    next()
  }
  return reqProps
}
