create sequence hibernate_sequence start with 3 increment by 1;

CREATE TABLE form(
    id int not null,
    name varchar(100) not null,
    email varchar(100) not null,
    phone int not null,
    areacode int not null,
    comment varchar(400)
);

insert into form(id,name,email,phone,areacode)
values (1, 'Test Testesen', 'test@test.no', 12345678,7031);

insert into form(id,name,email,phone,areacode,comment)
values (2, 'Testa Testesen', 'testa@test.no', 87654321,7032, 'Dette er en test');