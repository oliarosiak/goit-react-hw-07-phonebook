import { ProgressBar } from 'react-loader-spinner';
import { LoaderBlock, LoaderText } from './Loader.styled';

const Loader = () => (
  <LoaderBlock>   
    <LoaderText>Request in progress...</LoaderText>
    <ProgressBar
      height="25"
      width="60"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="var(--border-color)"
      barColor="var(--lumos-color)"
    />
  </LoaderBlock>
);

export default Loader;
