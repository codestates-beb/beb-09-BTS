create table users(
    address varchar(50) NOT NULL
);

create table items(
    tokenId varchar(20) NOT NULL primary key,
    address varchar(50) NOT NULL,
    name varchar(20) NOT NULL,
    description varchar(50),
    ipfs varchar(100) NOT NULL,
    FOREIGN KEY(address) REFERENCES users(address)
);

create table attributes(
    tokenId varchar(20) NOT NULL ,
    traitType varchar(20) NOT NULL,
    value varchar(20) NOT NULL ,
    FOREIGN KEY (tokenId) references items(tokenId)
);


