import {
    useState,
} from 'react';
import { EditButton } from './EditButton'
import { FullEditDialog } from './FullEditDialog'
import { ProductEntry } from '../models/Product';
import { formatCurrency } from '../libs/formatters';
import ModalStatus from './ModalStatus';
import { useEvent } from '@reusable-ui/core';
import { dynamicStyleSheet } from '@cssfn/cssfn-react';



// styles:
const useSampleDialogStyleSheet = dynamicStyleSheet(
    () => import(/* webpackPrefetch: true */'./SampleDialogStyle')
, { id: 'khg&fki97', specificityWeight: 2 });




export const SampleDialog = () => {
    const styles = useSampleDialogStyleSheet();
    
    
    
    // states:
    type EditMode = Exclude<keyof ProductEntry, '_id'|'image'>|'full'
    const [editMode, setEditMode] = useState<EditMode|null>(null);
    
    
    
    const product : ProductEntry = {
        _id: '#123',
        
        visibility: 'published',
        
        name : 'Nokia 3310',
        
        price : 123,
        shippingWeight: 0.30,
        
        stock: 8,
        
        description: 'blah... blah...',
        images: [
            'nokia-3310_0.jpg',
            'nokia-3310_1.jpg',
            'nokia-3310_2.jpg',
            'nokia-3310_3.jpg',
        ],
        path: 'nokia-3310'
    };
    const {
        name,
        images,
        price,
        stock,
        visibility,
        path,
    } = product;
    
    
    
    // handlers:
    const handleEditDialogClose = useEvent((): void => {
        setEditMode(null);
    });
    
    
    
    return (
        <div>
            <div className={styles.main}>
                <div className='prodImg'>
                    <img
                        alt={name ?? ''}
                        src={images?.[0] ? `/products/${path}/${images[0]}` : undefined}
                        sizes='96px'
                    />
                    <EditButton onClick={() => setEditMode('full')} />
                </div>
                
                <h3 className='name'>
                    {name}
                    <EditButton onClick={() => setEditMode('name')} />
                </h3>
                <p className='price'>
                    <strong className='value'>{formatCurrency(price)}</strong>
                    <EditButton onClick={() => setEditMode('price')} />
                </p>
                <p className='stock'>
                    Stock: <strong className='value'>{stock ?? 'unlimited'}</strong>
                    <EditButton onClick={() => setEditMode('stock')} />
                </p>
                <p className='visibility'>
                    Visibility: <strong className='value'>{visibility}</strong>
                    <EditButton onClick={() => setEditMode('visibility')} />
                </p>
                <p className='fullEditor'>
                    <EditButton buttonStyle='regular' onClick={() => setEditMode('full')}>
                        Open full editor
                    </EditButton>
                </p>
            </div>
            <ModalStatus theme='primary' modalCardStyle='scrollable' backdropStyle='static' onExpandedChange={({expanded}) => !expanded && setEditMode(null)}>
                {!!editMode && (editMode === 'full') && <FullEditDialog product={product} onClose={handleEditDialogClose} />}
            </ModalStatus>
        </div>
    )
}