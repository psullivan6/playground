# playground
Boilerplate for simple, playground dev

[Download Latest Release](https://github.com/psullivan6/playground/releases/latest)

## Build

The build system is `gulp` based and relies on node package modules to compile,
minify, and move the necessary files for testing and a final release.

To run the code locally via an express server, run the default `gulp` command.

To build the final release code, run the `gulp build` command.

## Deploy

To deploy the `release` code to an Amazon S3 bucket, ensure the bucket is setup
to accept static websites and has the following bucket policy:
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObjectAcl",
                "s3:AbortMultipartUpload",
                "s3:DeleteObject",
                "s3:PutObjectAcl",
                "s3:GetObject",
                "s3:ListMultipartUploadParts",
                "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::BUCKET_NAME_HERE/*"
        }
    ]
}
```