import { ErrorRequestHandler } from "express";
import status from "http-status";
import { TErrorSources } from "../globalTypes/error.type";
import config from "../config";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

    //ultimate return
    res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        err,
        stack: config.node_env === 'development' ? err?.stack : null,
      });
}

export default globalErrorHandler;