CREATE TABLE users (
    address VARCHAR(50) NOT NULL,
    PRIMARY KEY (address) -- Add primary key constraint
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

CREATE TABLE attributes (
    tokenId VARCHAR(20) NOT NULL,
    traitType VARCHAR(20) NOT NULL,
    value VARCHAR(20) NOT NULL,
    FOREIGN KEY (tokenId) REFERENCES items (tokenId) -- Reference the primary key column directly
);

create table collections(
    address varchar(50) not null PRIMARY KEY ,
    ownerAddress varchar(50) not null,
    name varchar(20) not null,
    foreign key(ownerAddress) references users(address)
)

