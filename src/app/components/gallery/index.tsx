import * as React from "react";
import Gallery, { PhotoProps } from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import "./styles.scss";

export interface GalleryProps {
    images: Array<PhotoProps>;
    height?: number;
}

export interface GalleryState {
    viewerIsOpen: boolean;
    currentImage: number;
    featuredImages: Array<PhotoProps>;
}

export default class PhotoGallery extends React.Component<GalleryProps, GalleryState> {
    private galleryContainer: React.RefObject<HTMLDivElement>;

    constructor(props) {
        super(props);
        this.state = {
            viewerIsOpen: false,
            currentImage: 0,
            featuredImages: props.images,
        };

        this.galleryContainer = React.createRef();
    }

    private openLightbox = (event, {photo, index}) => {
        this.setState({
            viewerIsOpen: true,
            currentImage: index
        })
    };

    private closeLightbox = () => {
        this.setState({
            viewerIsOpen: false,
            currentImage: 0
        });
    };

    render() {
        const {viewerIsOpen, currentImage} = this.state;
        return (
            <div ref={this.galleryContainer}>
                <Gallery photos={this.props.images}
                         onClick={this.openLightbox}
                         margin={4}
                         // direction="column"
                         // columns={4}
                />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={this.closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={this.props.images.map((x) => ({
                                    ...x,
                                    srcset: x.src,
                                    caption: x.alt,
                                    source: x.src,
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        );
    }
}

