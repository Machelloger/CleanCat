const baseUrl = 'https://api.telegram.org/bot8017929151:AAEZmTsY0HIPN6LnwiMltUzFo5tUuNcecbg/';

export const sendMessage = async (message: string): Promise<void> => {
    const url:string = `${baseUrl}sendMessage?chat_id=-1002304795271&text=${message}&protect_content=true&parse_mode=MarkdownV2`;

    await fetch(url);
}