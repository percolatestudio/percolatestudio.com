## Usage

```bash
$ npm install
```

### Development

```bash
$ grunt
```

This will use `nodemon` and `webpack` to watch for changes and restart and rebuild as needed.

Open http://localhost:3000

### Production

```bash
$ grunt static
```

This will build a static site in `./static`


### Deployment to S3

1. Create a bucket, e.g "static-test.percolatestudio.com"
2. Setup bucket policy like

``` json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "AddPerm",
			"Effect": "Allow",
			"Principal": "*",
			"Action": "s3:GetObject",
			"Resource": "arn:aws:s3:::static-test.percolatestudio.com/*"
		}
	]
}
```

3. Create a Route53 A-Alias record pointing to your S3 bucket.
4. Create an IAM user with permissions to upload to S3.
5. Edit `s3.config.json`, it should look like

``` json
{
  "key": "XXX",
  "secret": "XXX",
  "bucket": "static-test.percolatestudio.com",
  "region": "us-west-2"
}
```

```bash
$ grunt deploy
```
