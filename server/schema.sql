create table users(
    address varchar(50) NOT NULL
);

create table items(
    tokenId varchar(20) NOT NULL primary key,
    collectionAddress varchar(50) NOT NULL,
    ownerAddress varchar(50) NOT NULL,
    description varchar(50),
    ipfs varchar(100) NOT NULL,
    name varchar(20) NOT NULL ,
    FOREIGN KEY(ownerAddress) REFERENCES users(address),
    FOREIGN KEY(collectionAddress) REFERENCES collections(address)
);

create table attributes(
    tokenId varchar(20) NOT NULL ,
    traitType varchar(20) NOT NULL,
    value varchar(20) NOT NULL ,
    FOREIGN KEY (tokenId) references items(tokenId)
);

create table collections(
    address varchar(50) not null PRIMARY KEY ,
    ownerAddress varchar(50) not null,
    name varchar(20) not null,
    foreign key(ownerAddress) references users(address)
)

