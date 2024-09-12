import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

/*This line allows us to pool our environment variables from DOT Env file which I'll create soon*/
dotenv.config();