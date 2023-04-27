import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import ParentLayout from '../Layout';

const SingleAvatarPage = () => {

    const { query} = useRouter();
  return (
    <ParentLayout>
        <Box >{query.id}</Box>
    </ParentLayout>
  )
}

export default SingleAvatarPage