CREATE TABLE users (
    address VARCHAR(50) NOT NULL,
    PRIMARY KEY (address) -- Add primary key constraint
);

CREATE TABLE items (
    tokenId VARCHAR(20) NOT NULL PRIMARY KEY,
    address VARCHAR(50) NOT NULL,
    description VARCHAR(50),
    ipfs VARCHAR(100) NOT NULL,
    name VARCHAR(20) NOT NULL,
    FOREIGN KEY (address) REFERENCES users (address) -- Reference the primary key column directly
);

CREATE TABLE attributes (
    tokenId VARCHAR(20) NOT NULL,
    traitType VARCHAR(20) NOT NULL,
    value VARCHAR(20) NOT NULL,
    FOREIGN KEY (tokenId) REFERENCES items (tokenId) -- Reference the primary key column directly
);

CREATE TABLE collections (
    contractAddress VARCHAR(50) NOT NULL,
    ownerAddress VARCHAR(50) NOT NULL,
    name VARCHAR(20) NOT NULL,
    FOREIGN KEY (ownerAddress) REFERENCES users (address) -- Reference the primary key column directly
);
