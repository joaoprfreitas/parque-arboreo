create table usuario (
    email varchar(255),
    senha varchar(255) not null,
    nome varchar(60) not null,
    permissao smallint, -- 0: usuário, 1: moderador, 2: administrador

    primary key (email)
    constraint ck_permissao check (permissao >= 0 and permissao <= 2)
    constraint ck_email check (email ~* '^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$')
);

create table report (
    numero serial,
    descricao varchar(300) not null,
    data date not null,
    usuario varchar(255), -- not null?
    situacao smallint, -- 0: aberto, 1: em andamento, 2: fechado

    primary key (numero),
    foreign key (usuario) references usuario(email) on delete set null,
    constraint ck_situacao check (situacao >= 0 and situacao <= 2)
);

create table arvore (
    codigo serial,
    latitude numeric(10, 8) not null,
    longitude numeric(11, 8) not null,
    especie varchar(60),
    familia varchar(60),
    nome_popular varchar(60),
    origem varchar(60),
    DAP -- TERMINAR ATRIBUTOS ARVORE


    primary key (codigo),
    constraint ck_latitude check (latitude >= -90 and latitude <= 90),
    constraint ck_longitude check (longitude >= -180 and longitude <= 180)
)

create table condicoes_entorno (
    arvore integer,
    descricao varchar(100),

    constraint pk_condicoes_entorno primary key (arvore, descricao),
    foreign key (arvore) references arvore(codigo) on delete cascade
);

create table imagem (
    id serial primary key,
    nome varchar(255) not null,
    dados bytea not null
)

create table imagem_arvore (
    arvore integer,
    imagem integer,

    constraint pk_imagens primary key (arvore, imagem),
    foreign key (arvore) references arvore(codigo) on delete cascade,
    foreign key (imagem) references imagem(id) on delete cascade
);

create table tags (
    arvore integer,
    tag varchar(60),

    constraint pk_tags primary key (arvore, tag),
    foreign key (arvore) references arvore(codigo) on delete cascade
);

create table documento (
    id serial,
    nome varchar(255) not null,
    dados bytea not null

    constraint pk_documento primary key (id)
)

create table documento_arvore (
    arvore integer,
    documento integer,

    constraint pk_documentos primary key (arvore, documento),
    foreign key (arvore) references arvore(codigo) on delete cascade,
    foreign key (documento) references documento(id) on delete cascade
);

create table risco (
    id serial,
    descricao varchar(300) not null,

    constraint pk_risco primary key (id)
)

create table arvore_risco (
    arvore integer,
    risco integer,

    constraint pk_arvore_risco primary key (arvore, risco),
    foreign key (arvore) references arvore(codigo) on delete cascade,
    foreign key (risco) references risco(id) on delete cascade
);

create table arvore_historico_riscos (
    arvore integer,
    risco integer,
    data date,

    constraint pk_arvore_historico_riscos primary key (arvore, risco, data),
    foreign key (arvore) references arvore(codigo) on delete cascade,
    foreign key (risco) references risco(id) on delete cascade
);