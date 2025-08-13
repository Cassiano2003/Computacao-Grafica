import numpy as np

#Cores padroes (R,G,B)
def cores(R,G,B):
    color = np.array([R,G,B])
    color = np.array(color,dtype=np.float32)
    return color

#Rotaciona o objeto no espaço 
def rotacion(vet,angulo):
    angulo = np.radians(angulo)
    cos = np.cos(angulo)
    sen = np.sin(angulo)
    rotacion = np.array([[cos,-sen,0],[sen,cos,0],[0,0,1]])
    dx = np.mean(vet[:,0])
    dy = np.mean(vet[:,1])
    vet = transacao(vet,-dx,-dy)
    rotacionada = vet @ rotacion
    return transacao(rotacionada,dx,dy)

#Escala aumenta o tamanho do objeto
def escala(vet,sx,sy):
    dx = np.mean(vet[:,0])
    dy = np.mean(vet[:,1])
    scala = np.array([[sx,0,0],[0,sy,0],[0,0,1]])
    vet = transacao(vet,-dx,-dy)
    scalonada = vet @ scala
    return transacao(scalonada,dx,dy)


#Translaçao movimenta o objeto no espaço
def transacao(vet, tx,ty):
    transla = np.array([[1,0,0],[0,1,0],[tx,ty,1]])
    mat = vet @ transla
    return mat
