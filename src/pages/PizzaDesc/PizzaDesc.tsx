import * as React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './PizzaDesc.scss';

export default function PizzaDesc() {
    const params = useParams();
    const navigate = useNavigate();

    const [pizza, setPizza] = React.useState<{
        imageUrl: string;
        title: string;
        price: number;
    }>();

    React.useEffect(() => {
        const fetchPizza = async () => {
            try {
                const { data } = await axios.get('https://67eeff3fc11d5ff4bf7b8251.mockapi.io/items/' + params.id);
                setPizza(data);
            } catch (e) {
                alert('error');
                navigate('/');
            }
        };

        fetchPizza();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!pizza) {
        return 'Загрузка....';
    }
    return (
        <div className="test">
            <img src={`${process.env.PUBLIC_URL + pizza.imageUrl.substring(1)}`} alt="" />
            <h2>{pizza.title}</h2>
            <h3>{pizza.price} P</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, expedita doloremque inventore cumque minus nihil perferendis qui sit illo
            nulla asperiores voluptatem consequuntur, consectetur soluta laudantium, commodi ex corrupti? Corrupti.
        </div>
    );
}
