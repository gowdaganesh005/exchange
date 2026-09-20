import { ApiException,  AppsV1Api,  CoreV1Api, KubeConfig } from '@kubernetes/client-node';
import type {AppsV1ApiCreateNamespacedDeploymentRequest,AppsV1ApiPatchNamespacedDeploymentRequest,CoreV1ApiCreateNamespacedServiceRequest,CoreV1ApiCreateNamespaceRequest} from "@kubernetes/client-node"

const k8sConfig = new KubeConfig()
k8sConfig.loadFromDefault()

const k8sCoreApi = k8sConfig.makeApiClient(CoreV1Api)
const k8sAppApi  = k8sConfig.makeApiClient(AppsV1Api)


const apiNamespace = "api-ns"


const apiNamespaceManifest :CoreV1ApiCreateNamespaceRequest = {
    body: 
    {
    apiVersion: "v1",
    kind: "Namespace",
    metadata: {
        "name": apiNamespace
    }
    }
}
const apiDeploymentManifest :AppsV1ApiCreateNamespacedDeploymentRequest = {
    namespace: apiNamespace,
   body : { apiVersion: "apps/v1",
    kind: "Deployment",
    metadata: {
        name: "api-deployment",
        labels: {
            "app.kubernetes.io/name": "api",
            "app.kubernetes.io/instance": "api-deployment",
            "app.kubernetes.io/component": "backend"
        }},
        spec:{
            replicas: 1,
            selector: {
                matchLabels:{
                    "app.kubernetes.io/name": "api",
                    "app.kubernetes.io/instance": "api-deployment",
                
                }
            },
            template: {
                metadata: {
                    labels: {
                        "app.kubernetes.io/name": "api",
                         "app.kubernetes.io/instance": "api-deployment",
                         "app.kubernetes.io/component": "backend"
                    }
                },
                spec: {
                    containers:[
                        {
                            name: "api-app",
                            image: "exchange-api:latest",
                            imagePullPolicy: "IfNotPresent",
                            ports:[
                                {
                                    containerPort: 3000
                                }
                            ]
                        }
                    ]
                }
            }

        }
    } 
}


const apiServiceManifest: CoreV1ApiCreateNamespacedServiceRequest= {
    namespace: apiNamespace,
    body: {
    apiVersion: "v1",
    kind: "Service",
    metadata:{
        name: "api-service",
        labels:{
             "app.kubernetes.io/name": "api",
             "app.kubernetes.io/instance": "api-service"
        }
    },
    spec: {
        selector:{
            "app.kubernetes.io/name": "api",
            "app.kubernetes.io/instance": "api-deployment"
        },
        ports: [
            {
                protocol: "TCP",
                port: 80
            }
        ] 
    }
}
}

export const createNamespace = async () => {
    try{
        const ns_response = await k8sCoreApi.createNamespace(apiNamespaceManifest)
        console.log(ns_response)
      
    }catch(error: any){
        console.log("ERROR:: ",error)
    }

    try{
        const dp_response = await k8sAppApi.createNamespacedDeployment(apiDeploymentManifest)
        console.log(dp_response)
        
    }catch(error: any){
        console.log("ERROR:: ",error)
    }

    try{
        const svc_response = await k8sCoreApi.createNamespacedService(apiServiceManifest)
        console.log(svc_response)
        
    }catch(error: any){
        console.log("ERROR:: ",error)
    }

    try{
        const svc_patch_res = await k8sAppApi.patchNamespacedDeployment({name: apiDeploymentManifest.body.metadata?.name!,namespace:apiNamespace, body: apiDeploymentManifest.body} )
        console.log(svc_patch_res)
        
    }catch(error: any){
        console.log("ERROR:: ",error)
    }
}

