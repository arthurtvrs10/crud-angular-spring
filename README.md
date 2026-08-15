# 🅰️ CRUD Angular & Spring Boot

<p align="center">
  <img src="https://img.shields.io/badge/Angular-19+-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/Java-21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
  <img src="https://img.shields.io/badge/Angular_Material-Componentes-blue?style=for-the-badge&logo=angular" alt="Angular Material" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License MIT" />
</p>

Aplicação Full Stack moderna para gerenciamento de cursos (CRUD completo), demonstrando a integração de **Angular 19** com componentes standalone, **Angular Material**, **TypeScript** e **Spring Boot** com API RESTful.

---

## 🎯 Funcionalidades

- 📋 **Listagem de Cursos**: Tabela interativa com Angular Material, loading states e tratamento de erros.
- ➕ **Criação e Edição**: Formulários reativos com validações síncronas e feedback visual.
- 🗑️ **Exclusão de Registros**: Confirmação modal com remoção via API.
- 🛡️ **Tratamento de Exceções**: Diálogos modais de erro personalizados e interceptors de requisições HTTP.
- 🔄 **Comunicação Reativa**: Uso de RxJS e Signals para gerenciamento de estado e fluxos assíncronos.

---

## 🏗️ Estrutura do Projeto

```
crud-angular-spring/
├── crud-angular/              # Frontend Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── courses/       # Módulo / Funcionalidades de Cursos
│   │   │   │   ├── components/# Componentes visuais e formulários
│   │   │   │   ├── models/    # Interfaces e tipos de dados
│   │   │   │   └── services/  # Serviços HTTP e integração com API
│   │   │   └── shared/        # Pipes, diálogos e componentes reutilizáveis
│   └── angular.json
└── README.md
```

---

## 🚀 Como Executar

### Pré-requisitos
- **Node.js 20+** e **npm**
- **Angular CLI**: `npm install -g @angular/cli`
- **Java JDK 21+** (para execução do backend)

### 1. Executando o Frontend Angular
```bash
cd crud-angular
npm install
ng serve
```
Acesse `http://localhost:4200` no navegador. A aplicação recarregará automaticamente após alterações de código.

---

## 🛠️ Tecnologias e Bibliotecas

- **Frontend**: Angular 19, TypeScript, Angular Material, RxJS, HTML5/CSS3.
- **Backend Integrável**: Spring Boot 3, Spring Data JPA, Bean Validation, H2/MySQL.

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

<p align="center">Desenvolvido por <a href="https://github.com/arthurtvrs10">Arthur Tavares</a></p>
