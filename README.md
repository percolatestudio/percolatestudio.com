## Description

This is the code that runs Percolate Studio's website at http://percolatestudio.com . The site is a Single Page App built in React. It can be run as a node application with server side rendering, from a set of static pages that have been rendered to disk *or* as a pure client-side app. We run in production as a static site deployed to S3.

We believe this is a very powerful technique for building rich clientside websites that are:

* Extremely fast (especially if served from a CDN)
* Completely redundant/fault tolerant
* Infinitely scalable
* Very cheap to host
* Can connect to and use a 'backend as a service' if desired
* Can be trivially upgraded to a dynamic node application if required in the future

We wrote up our rationale in more detail on our [blog](http://blog.percolatestudio.com/engineering/architecting-better-landing-pages/).

## Usage

First install the dependencies including grunt if you don't have it yet

``` bash
$ npm install -g grunt-cli
$ npm install
```

### Development

The run the development node server (app/server.js)

``` bash
$ grunt
```

This will use `nodemon` and `webpack` to watch for changes and restart and rebuild as the app as needed.

Open [http://localhost:3000](http://localhost:3000)

### Production

To build the 'production' version (app/static.js)

``` bash
$ grunt static
```

This will build a complete static site in `./static` . The best way to test that this is working locally is to install and run a light http server.

``` bash
$ npm install -g http-server
$ cd static
$ http-server
```

Open [http://localhost:8080](http://localhost:8080)

### Deployment to S3

1. Create a bucket, e.g "percolatestudio.com"
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
			"Resource": "arn:aws:s3:::percolatestudio.com/*"
		}
	]
}
```

3. Create a Route53 A-Alias record pointing to your S3 bucket.
4. Create an IAM user with permissions to upload to S3.
5. Create `s3.config.json`, it should look something like

``` json
{
  "key": "XXX",
  "secret": "XXX",
  "bucket": "percolatestudio.com",
  "region": "us-west-2"
}
```

6. Build and deploy the site

``` bash
$ grunt deploy
```

### License & Copyright

The code in this project is copyright Percolate Studio Ltd., and licensed under the MIT license (see attached license file LICENSE.txt). All images and textual content are copyright Percolate Studio Ltd. or the respective copyright holder and ARE NOT available to be re-used.

Webfonts are copyright and subject to licensing agreements with their respective owners. They ARE NOT available for re-use. Please license them with their owners.

Maintained by Zoltan Olah (@zol).
