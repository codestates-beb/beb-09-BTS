create table users(
    address varchar(50) NOT NULL
);

create table items(
    tokenId varchar(20) NOT NULL primary key,
    address varchar(50) NOT NULL,
    description varchar(50),
    ipfs varchar(100) NOT NULL,
    name varchar(20) NOT NULL ,
    FOREIGN KEY(address) REFERENCES users(address)
);

create table attributes(
    tokenId varchar(20) NOT NULL ,
    traitType varchar(20) NOT NULL,
    value varchar(20) NOT NULL ,
    FOREIGN KEY (tokenId) references items(tokenId)
);

create table collections(
    contractAddress varchar(50) not null,
    ownerAddress varchar(50) not null,
    name varchar(20) not null,
    foreign key(ownerAddress) references users(address)
)

