kubectl create -f ./deployments/myapp-deployment.yaml
kubectl create -f ./services/frontend-service.yaml

#view created objects
kubectl get pods,svc
