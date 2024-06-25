import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
   cloud_name: 'dyhzzxhuk',
   api_key: '775651524627837',
   api_secret: 'YLRXEHi8KW2HVuMdWk--qwd_Spg' 
});

describe('Pruebas sobre fileUpload', () => {
    
    test('Debe de cargar un archivo y retornar el URL ', async() => {
        
        const resp = await fetch('https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Nezuko-Kamado.jpg');
        const blob = await resp.blob();
        const file = new File([blob], 'foto.png');
        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1].replace('.jpg', '');

        await cloudinary.v2.api.delete_resources(imageId, {}, () => {
           
        });
    });
    
    test('Debe de retornar un error', async() => {
      
        const file = new File([], 'foto.png');
        const url = await fileUpload( file );

        expect( url ).toBe(null);

    });
    
});
