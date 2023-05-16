## Work Flow

- [x]  AWS create instance
- [x]  enable MFA
- [x]  create EC2 instance
- [x]  AWS connect instance in terminal (Ubuntu)
    
    ```jsx
    ssh -i aws/fock.pem ubuntu@35.83.196.30
    ```
    
    key-pairs set to instance
    
    ```jsx
    chmod 600 fock.pem
    ```
    
    📄 [AWS doc](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html)
    
    📄 [instruct](https://ithelp.ithome.com.tw/articles/10197178) 
    
- [x]  傳送file的方法 (in stylish)

`scp -i ~/.ssh/stylish_key.pem -r ../stylish ubuntu@52.194.142.24:~/`

- [x]  連進AWS instance

`ssh -i  ~/.ssh/stylish_key.pem ubuntu@52.194.142.24`

- [x]  re-check instance
    
    ssh連接instance -> 安裝node/npm, nginx -> 設定instance security group -> 連線
    
- [x]  在/etc/nginx/sites-available建立config file

```latex
server {
listen 80;
server_name 52.194.142.24;    
			location / {
        proxy_pass <http://localhost:8000>;
    }
}

```

``關聯後即可在port 80上運行 8000 server

## PR Todolist

- [x]  enable MFA
- [x]  The public IP of your website
    
    `52.194.142.24`
    
- [x]  How to connect to your website on port 80 (limitation: 不可以用 root 權限啟動你自己的 web server)
    
    use nginx to listen on port 80, once nginx recieve a request, proxy would pass the request to the web server which located on port 8000.
    
- [x]  How to run your application in the background
    1. I choose to append ampersand(&) onto the node command. with this, everytime type this command :
    
    ```
    npm run
    
    ```
    
    It will execute “node index &”
    
    1. The program will print out the process id on server console, to make developer kill the process more easily.
- [x]  How do you deal with the issue of unable to install Node.js 18 on Amazon Linux 2 and why?
    
    I choose Ubuntu20.04 instead, since it’s been tested by tons of developers. There are so many solutions for every issues, I can easily find one and correct it with less effort.