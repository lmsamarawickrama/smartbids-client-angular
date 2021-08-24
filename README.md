# smartbids-client-angular

Angular frontend for smarbids application. Current implementation allows doing following operation based on Admin, Bidder, Auctionner

1. Admin 
  - Allow user registration
2. Auctionneer
  - Publish items for auctions
  - Can select a bid for a published item
3. Bidder
  - Allow bidding for published auction items

# To run in kubernetes (minikube) , use following steps

  1. minikube docker-env | Invoke-Expression
  2. docker build -t lmsamarawickrama/smartbids-client .
  3. kubectl.exe create -f .\deployment.yaml
  4. kubectl port-forward service/smartbids-client-service 7080:80


# Used Technologies : Angular(template driven forms, reactive forms, interceptors, AuthGate and etc) , rxjs, Material, Bootstrap, Type Script, Java Script, Docker, Kuberntes

# Backend application can be fount at https://github.com/lmsamarawickrama/smartbids-backend

# Few screen shots are mentioned below.

![image](https://user-images.githubusercontent.com/5676375/130425561-c3038971-a3f6-4936-8706-614b0a4b4ab4.png)

![image](https://user-images.githubusercontent.com/5676375/130425967-72ee5081-7f4a-4294-9d0b-f15cc2674eca.png)

![image](https://user-images.githubusercontent.com/5676375/130426123-b0af6721-62d8-414a-ba21-92928b6e0d58.png)


# Note : Unit tests (jasmine and karma), e2e tests (jasmine and protractor) to be written
