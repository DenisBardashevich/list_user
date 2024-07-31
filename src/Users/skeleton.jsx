import ContentLoader from "react-content-loader";

const Skeleton = () => {
    return (
        <>
            <ContentLoader className="skeletons" viewBox="0 0 380 70">
                {/* Only SVG shapes */}
                <rect x="0" y="0" rx="100" ry="100" width="70" height="70" />
                <rect x="80" y="17" rx="4" ry="4" width="300" height="20" />
                <rect x="80" y="50" rx="3" ry="" width="250" height="15" />
            </ContentLoader>
        </>
    );
};

export default Skeleton;
