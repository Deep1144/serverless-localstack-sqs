1. `docker-compose up` to get localstack up and running
2. `npm run create:queue` creates a offline sqs queue
3. `npm run list:queue` check if queue has been created
4. `npm run offline` to start serverless

Now, make get request to this endpoint 
```
http://0.0.0.0:3000/dev/app-store-server-notifications 
```

and boom, now you see the log from local consumer lambda

# serverless-localstack-lambda
Serverless LocalStack Lambda

# More Details Visit

https://sqsOfflineQueue-io.medium.com/serverless-localstack-lambda-53fd8d46983
