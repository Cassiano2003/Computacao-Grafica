import glfw as gl
import Transformaçoes_2D as tf
from OpenGL.GL import *
from random import randint

pontos = tf.np.array([[0,.5,1],
                    [-.5,-.5,1],
                    [.5,-.5,1]])

#Cria um triangulo
def gera_triangulo(vet,r,g,b):
    glBegin(GL_TRIANGLES)
    cont = 0
    for i in vet:
        glColor3fv(tf.cores(r,g,b))
        glVertex3fv(i)
        cont += 1
    glEnd()

#Cria retas que mostao a basse canonica
def origen():
    cardinal = tf.np.array([[0,0,0],[1,0,0],[0,1,0],[0,0,1],[-1,0,0],[0,-1,0]])
    are = [0,1,0,2,0,3,0,4,0,5]
    glBegin(GL_LINES)
    for i in range(len(are)):
        glColor3f(1.0,1.0,1.0)
        glVertex3fv(cardinal[are[i]])
        i += 1
    glEnd()

def main():
    
    if not gl.init():
        raise Exception("glfw nao inicializado!!!")

    w, h = 1920,1050

    tela = gl.create_window(w,h,"Tela",None,None)

    if not tela:
        gl.terminate()
        raise Exception("glfw nao criou tela!!!")
        exit()

    gl.set_window_pos(tela,w,h)
    gl.make_context_current(tela)

    glClearColor(0,0,0,0)
    glViewport(0,0,w,h)

    triangulo_1 = pontos
    triangulo_2 = pontos
    triangulo_3 = pontos

    r = 2
    sx = 1/2
    sy = sx
    tx = 0
    ty = 0

    triangulo_1 = tf.escala(triangulo_1,sx,sy)
    triangulo_1 = tf.transacao(triangulo_1,tx,ty)
    triangulo_1 = tf.rotacion(triangulo_1,180)


    triangulo_3 = tf.transacao(triangulo_3,tx-.5,ty-.5)

    triangulo_2 = tf.escala(triangulo_2,sx,sy)
    triangulo_2 = tf.transacao(triangulo_2,tx+.5,ty-.5)

    i = 0
    while (not gl.window_should_close(tela)):
        gl.poll_events()

        glClear(GL_COLOR_BUFFER_BIT)

        origen()

        dx = tf.np.mean(triangulo_1[:,0])
        dy = tf.np.mean(triangulo_1[:,1])

        if i == 0 :
            triangulo_1 = tf.transacao(triangulo_1,-dx,-dy)
            triangulo_1 = tf.transacao(triangulo_1,.3,.3)
            triangulo_3 = tf.escala(triangulo_3,1/2,1/2)
            i = 1
        elif i == 100:
            triangulo_1 = tf.transacao(triangulo_1,-dx,-dy)
            triangulo_1 = tf.transacao(triangulo_1,-.3,.3)
            triangulo_3 = tf.escala(triangulo_3,2,2)
        elif i == 200:
            i = 0

        
        if i != 0:
            i += 1

        #triangulo_1 = tf.rotacion(triangulo_1,r)
        triangulo_2 = tf.rotacion(triangulo_2,-r)
        #triangulo_3 = tf.rotacion(triangulo_3,r)
        gera_triangulo(triangulo_1,1,0,1)
        gera_triangulo(triangulo_2,0,0,1)
        gera_triangulo(triangulo_3,0,1,1)

        gl.swap_buffers(tela)

    gl.terminate()

main()