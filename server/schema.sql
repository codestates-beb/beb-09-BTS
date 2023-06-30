CREATE TABLE users (
    address VARCHAR(50) NOT NULL,
    PRIMARY KEY (address) -- Add primary key constraint
);

CREATE TABLE items (
    tokenId VARCHAR(20) NOT NULL PRIMARY KEY,
    collectionAddress VARCHAR(50) NOT NULL,
    ownerAddress VARCHAR(50) NOT NULL,
    description VARCHAR(50),
    ipfs VARCHAR(100) NOT NULL,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE attributes (
    tokenId VARCHAR(20) NOT NULL,
    traitType VARCHAR(20) NOT NULL,
    value VARCHAR(20) NOT NULL,
    FOREIGN KEY (tokenId) REFERENCES items (tokenId) -- Corrected foreign key constraint
);

CREATE TABLE collections (
    address VARCHAR(50) NOT NULL PRIMARY KEY,
    ownerAddress VARCHAR(50) NOT NULL,
    name VARCHAR(20) NOT NULL,
    FOREIGN KEY (ownerAddress) REFERENCES users (address) -- Added foreign key constraint
);

ALTER TABLE items ADD FOREIGN KEY (ownerAddress) REFERENCES users (address);
ALTER TABLE items ADD FOREIGN KEY (collectionAddress) REFERENCES collections (address);

