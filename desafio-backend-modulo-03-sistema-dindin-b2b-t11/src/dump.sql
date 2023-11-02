create table usuarios (
  id serial primary key, 
  nome text not null, 
  email text unique not null, 
  senha text not null
  );
  
  create table categorias (
    id serial primary key,
    descricao text
    );
    
  create table transacoes (
      id serial primary key,
    descricao text not null,
    valor int not null,
    data timestamp,
    categoria_id int references categorias(id),
    usuario_id int references usuarios(id),
    tipo text 
    );


insert into categorias (descricao)
values ('Alimentação'), ('Assinaturas e Serviços'), ('Casa'), ('Mercado'),
 ('Cuidados Pessoais'), ('Educação'), ('Familia'), ('Lazer'), ('Pets'),
 ('Presentes'), ('Roupas'), ('Saúde'), ('Transporte'), ('Salário'),
 ('Vendas'), ('Outras receitas'), ('Outras despesas');
