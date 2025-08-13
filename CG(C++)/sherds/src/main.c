#include "glad/glad.h"
#include <GLFW/glfw3.h>

#include "world/window.h"
#include "world/shader.h"

int main() {

  createWindow();

  struct Shader shader = createShader("res/shaders/main.vs", "res/shaders/main.fs");
  
  float vertices[] = {
    // positions         // normals
     0.5f, -0.5f, 0.0f,    // bottom right
    -0.5f, -0.5f, 0.0f,    // bottom left
     0.0f,  0.5f, 0.0f     // top
  };

  
  unsigned int VBO, VAO;
  glGenVertexArrays(1, &VAO);
  glEnableVertexAttribArray(1);
  glGenBuffers(1, &VBO);
  glBindVertexArray(VAO);

  glBindBuffer(GL_ARRAY_BUFFER, VBO);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  GLint angle_location = glGetUniformLocation(shader.ID, "angle");
  
  // Position attribute
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);

  
  useShader(shader);
  float angle = 45.0f;
  
  while (!glfwWindowShouldClose(window.self)) {
    updateWindow();
    angle += 0.1f;
    glUniform1f(angle_location ,angle);
    
    glBindVertexArray(VAO);
    glDrawArrays(GL_TRIANGLES, 0, 3);
    glfwSwapBuffers(window.self);
    glfwPollEvents();
  }

  glDeleteVertexArrays(1, &VAO);
  glDeleteBuffers(1, &VBO);
  terminateWindow();
   
  return 0;
}