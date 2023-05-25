import { deleteAsync } from 'del';
//переменная удаляется все с папки dist
export const reset = () => {
	return deleteAsync(app.path.clean)
}