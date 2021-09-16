# Gertrudes
Sistema farmácia para comprar medicamentos para o seu tratamento de uso contínuo

Para executar o projeto precisa do composer, nodeJs 12.

O sistema esta dividido em duas parte back-end e front-end, foi desenvolvido em back-end em laravel e o front end em react.

Para executa o projeto precisa importa o banco de dados que se encontra do diretório banco, também pode ser criado a tabela manualmente com comando "CREATE DATABASE IF NOT EXISTS `gertrudes` CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `gertrudes`;" depois do banco de dados criado.

no arquivo .env-example precisa renomear para nome .env, não pode esquecer em configurar o nome do banco de dados, usuario e senha e host, sem essas informações aplicação não vai funcionar.

Podemos agora abrir diretório back-end rodar o "composer install" , depois de baixa as dependências , execute o comando "php artisan migrate" para criar as tabelas do banco de dados.

Depois das tabelas criada precisa executar o comando "php artisan db:seed" esse comando vai inserir dados na tabela de produtos. Depois execute o comando "php artisan serve" vai executar aplicação no endereço "http://localhost:8000", porém esse sistema é uma api 
link da API http://localhost:8000/api

post => '/auth/login'
post => '/auth/register'
post => '/auth/logout'
get =>  '/products'
post => '/sales'
get => '/last-sale'

Para executa o front-end abrir o diretório executa o npm install, depois de instalar as dependência execute o comando npm start fazer o cadastro para pode acessar o sistema.

