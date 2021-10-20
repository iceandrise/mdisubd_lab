
create TABLE adres(

    id SERIAL PRIMARY KEY,
    country VARCHAR(255),
    city VARCHAR(255),
    street VARCHAR(255),
    house VARCHAR(255)

);

create TABLE client(

    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255),
    client_password VARCHAR(255),
    isAdmin BOOLEAN,
    address_id INTEGER,
    FOREIGN KEY (address_id) REFERENCES adres(id)

);

create TABLE finance(

    id SERIAL PRIMARY KEY,
    card_number INTEGER, 
    finance_key INTEGER, 
    date_at DATE 
);

create TABLE item(

    id SERIAL PRIMARY KEY,
    price INTEGER, 
    material VARCHAR(255),
    weight_item INTEGER, 
    type_item VARCHAR(255)
);

create TABLE cart(

    id SERIAL PRIMARY KEY,
    client_id INTEGER,
    FOREIGN KEY (client_id) REFERENCES client(id),
    item_id INTEGER,
    FOREIGN KEY (item_id) REFERENCES item(id),
    price INTEGER
    
);

create TABLE order_item(

    id SERIAL PRIMARY KEY,
    count_item INTEGER,
    price_order INTEGER,
    client_id INTEGER,
    FOREIGN KEY (client_id) REFERENCES client(id),
    finance_id INTEGER,
    FOREIGN KEY (finance_id) REFERENCES finance(id),
    item_id INTEGER,
    FOREIGN KEY (item_id) REFERENCES item(id)
);

create TABLE image_item(
    id SERIAL PRIMARY KEY,
    item_id INTEGER,
    FOREIGN KEY (item_id) REFERENCES item(id),
    url_image VARCHAR(255)
);

create TABLE promocode(
    id SERIAL PRIMARY KEY,
    promocode_password VARCHAR(255),
    type_sale FLOAT
);




CREATE TABLE logs(

    texting text,
    added timestamp without time zone
);

CREATE OR REPLACE FUNCTION add_to_log() RETURNS TRIGGER AS $$
DECLARE
        mstr VARCHAR(30);
        astr VARCHAR(100);
        retstr VARCHAR(254);
BEGIN
        IF (TG_OP = 'INSERT') THEN
            astr = NEW.country;
            mstr:= 'Add new adres';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;
      
        ELSIF (TG_OP = 'UPDATE') THEN
            astr = NEW.country;
            mstr:= 'Update adres';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;

        ELSIF (TG_OP = 'DELETE') THEN
            astr = OLD.country;
            mstr:= 'Remove adres';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN OLD;

        END IF;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER tr_adres
AFTER INSERT OR UPDATE OR DELETE ON adres FOR EACH ROW EXECUTE PROCEDURE add_to_log();



CREATE OR REPLACE FUNCTION client_log() RETURNS TRIGGER AS $$
DECLARE
        mstr VARCHAR(30);
        astr VARCHAR(100);
        retstr VARCHAR(254);
BEGIN
        IF (TG_OP = 'INSERT') THEN
            astr = NEW.last_name;
            mstr:= 'Add new client: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;
      
        ELSIF (TG_OP = 'UPDATE') THEN
            astr = NEW.last_name;
            mstr:= 'Update client: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;

        ELSIF (TG_OP = 'DELETE') THEN
            astr = OLD.last_name;
            mstr:= 'Remove client: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN OLD;

        END IF;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER tr_client
AFTER INSERT OR UPDATE OR DELETE ON client FOR EACH ROW EXECUTE PROCEDURE client_log();


CREATE OR REPLACE FUNCTION item_log() RETURNS TRIGGER AS $$
DECLARE
        mstr VARCHAR(30);
        astr VARCHAR(100);
        retstr VARCHAR(254);
BEGIN
        IF (TG_OP = 'INSERT') THEN
            astr = NEW.type_item;
            mstr:= 'Add new item: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;
      
        ELSIF (TG_OP = 'UPDATE') THEN
            astr = NEW.type_item;
            mstr:= 'Update item: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;

        ELSIF (TG_OP = 'DELETE') THEN
            astr = OLD.type_item;
            mstr:= 'Remove item: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN OLD;

        END IF;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER tr_item
AFTER INSERT OR UPDATE OR DELETE ON item FOR EACH ROW EXECUTE PROCEDURE item_log();



CREATE OR REPLACE FUNCTION image_log() RETURNS TRIGGER AS $$
DECLARE
        mstr VARCHAR(30);
        astr VARCHAR(100);
        retstr VARCHAR(254);
BEGIN
        IF (TG_OP = 'INSERT') THEN
            astr = NEW.item_id;
            mstr:= 'Add image of item #: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;
      
        ELSIF (TG_OP = 'UPDATE') THEN
            astr = NEW.item_id;
            mstr:= 'Update image of item #: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;

        ELSIF (TG_OP = 'DELETE') THEN
            astr = OLD.item_id;
            mstr:= 'Remove image of item #: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN OLD;

        END IF;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER tr_image
AFTER INSERT OR UPDATE OR DELETE ON image_item FOR EACH ROW EXECUTE PROCEDURE image_log();


CREATE OR REPLACE FUNCTION cart_log() RETURNS TRIGGER AS $$
DECLARE
        mstr VARCHAR(30);
        astr VARCHAR(100);
        retstr VARCHAR(254);
BEGIN
        IF (TG_OP = 'INSERT') THEN
            astr = NEW.id;
            mstr:= 'Add cart #: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;
      
        ELSIF (TG_OP = 'UPDATE') THEN
            astr = NEW.id;
            mstr:= 'Update cart #: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;

        ELSIF (TG_OP = 'DELETE') THEN
            astr = OLD.id;
            mstr:= 'Remove cart #: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN OLD;

        END IF;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER tr_cart
AFTER INSERT OR UPDATE OR DELETE ON cart FOR EACH ROW EXECUTE PROCEDURE cart_log();



CREATE OR REPLACE FUNCTION order_log() RETURNS TRIGGER AS $$
DECLARE
        mstr VARCHAR(30);
        astr VARCHAR(100);
        retstr VARCHAR(254);
BEGIN
        IF (TG_OP = 'INSERT') THEN
            astr = NEW.id;
            mstr:= 'Add order #: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;
      
        ELSIF (TG_OP = 'UPDATE') THEN
            astr = NEW.id;
            mstr:= 'Update order #: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;

        ELSIF (TG_OP = 'DELETE') THEN
            astr = OLD.id;
            mstr:= 'Remove order #: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN OLD;

        END IF;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER tr_order
AFTER INSERT OR UPDATE OR DELETE ON order_item FOR EACH ROW EXECUTE PROCEDURE order_log();



CREATE OR REPLACE FUNCTION finance_log() RETURNS TRIGGER AS $$
DECLARE
        mstr VARCHAR(30);
        astr VARCHAR(100);
        retstr VARCHAR(254);
BEGIN
        IF (TG_OP = 'INSERT') THEN
            astr = NEW.card_number;
            mstr:= 'Add new card number: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;
      
        ELSIF (TG_OP = 'UPDATE') THEN
            astr = NEW.card_number;
            mstr:= 'Update card number: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;

        ELSIF (TG_OP = 'DELETE') THEN
            astr = OLD.card_number;
            mstr:= 'Remove card number: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN OLD;

        END IF;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER tr_finance
AFTER INSERT OR UPDATE OR DELETE ON finance FOR EACH ROW EXECUTE PROCEDURE finance_log();


CREATE OR REPLACE FUNCTION promocode_log() RETURNS TRIGGER AS $$
DECLARE
        mstr VARCHAR(30);
        astr VARCHAR(100);
        retstr VARCHAR(254);
BEGIN
        IF (TG_OP = 'INSERT') THEN
            astr = NEW.promocode_password;
            mstr:= 'Add new promocode: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;
      
        ELSIF (TG_OP = 'UPDATE') THEN
            astr = NEW.promocode_password;
            mstr:= 'Update promocode: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN NEW;

        ELSIF (TG_OP = 'DELETE') THEN
            astr = OLD.promocode_password;
            mstr:= 'Remove promocode: ';
            retstr := mstr || astr;
            INSERT INTO logs(texting, added) values (retstr, NOW());
            RETURN OLD;

        END IF;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER tr_promocode
AFTER INSERT OR UPDATE OR DELETE ON promocode FOR EACH ROW EXECUTE PROCEDURE promocode_log();