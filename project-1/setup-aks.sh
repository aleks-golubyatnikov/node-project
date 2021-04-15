az group create --name RG-k8s --location centralus
az aks create -g RG-k8s  -n K8S-project-1 --node-count 1
az aks get-credentials -g RG-k8s --name K8S-project-1
