import React, { useEffect, useRef, useState, useCallback } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import Loader from "./Loader";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import ControlPanel from "./ControlPanel";
import { findBooksWithout } from "../../../member/store/actions/bookSearchAction";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import HTMLFlipBook from "react-pageflip";
import { Button } from "react-bootstrap";
import { faForward, faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const convertPdfToImages = async (pdfFile, setChunkLength, setTotalPages) => {
    const pdf = await pdfjs.getDocument(pdfFile).promise;
    const totalPageCount = pdf.numPages;
    setTotalPages(totalPageCount);
    const imageChunks = [];
    for (let pageNumber = 1; pageNumber <= totalPageCount; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 2 });
        setChunkLength(pageNumber);
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: context,
            viewport: viewport,
        };

        await page.render(renderContext).promise;

        const image = new Image();
        image.src = canvas.toDataURL();
        imageChunks.push(image);
    }

    return imageChunks;
};

const PDFReader = (props) => {
    const { findBooksWithout, searchBooks } = props;
    const { id } = useParams();
    const [scale, setScale] = useState(1.0);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [fileName, setFileName] = useState("");
    const [imageChunks, setImageChunks] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loaderPercent, setLoaderPercent] = useState(0);
    const [chunkLength, setChunkLength] = useState(0);
    const [goToPage, setGoToPage] = useState(1);
    const readerRef = useRef();

    function calculatePercentage(part, whole) {
        return Math.round((part / whole) * 100);
    }

    const onFlip = useCallback((e) => {
        setCurrentIndex(e.data);
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setIsLoading(false);
    }

    useEffect(() => {
        findBooksWithout();
        // if (searchBooks.length > 0 && id) {
        //     const ebook =
        //         searchBooks.length > 0 &&
        //         searchBooks.find((book) => book.id === parseInt(id));
        //     setFileName((prev) => (prev = ebook.file_name));
        // }
        // console.log({ fileName });
    }, []);

    useEffect(() => {
        const loadPDF = async () => {
            try {
                const chunks = await convertPdfToImages(
                    "public/uploads/ebooks/" + id,
                    setChunkLength,
                    setTotalPages
                );
                setImageChunks(chunks);
                setIsLoading(false);
            } catch (error) {
                console.error("Error converting PDF to images:", error);
            }
        };

        loadPDF();
    }, [id]);

    useEffect(() => {
        setLoaderPercent(calculatePercentage(chunkLength, totalPages));
    }, [chunkLength]);
    return (
        <div>
            <Loader loaderPercent={loaderPercent} isLoading={isLoading} />
            {/* <section
                id="pdf-section"
                className="d-flex flex-column align-items-center w-100"
            >
                <ControlPanel
                    scale={scale}
                    setScale={setScale}
                    numPages={numPages}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    file="https://rawcdn.githack.com/shankarsivaReddy/react-pdf-reader/a4c22f23c9b508741f4410c3c18de91ff5e1e47f/public/assets/docs/file-sample.pdf"
                />
                <Document
                    file={id ? "public/uploads/ebooks/" + id : null}
                    // file={imageChunks}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} scale={scale} />
                </Document>
            </section> */}
            <div className="reader-container px-3 py-2">
                <div style={{ background: "url(/images/background.jpg)" }}>
                    <HTMLFlipBook
                        ref={readerRef}
                        width={550}
                        height={700}
                        minWidth={315}
                        maxWidth={1000}
                        minHeight={400}
                        maxHeight={1533}
                        maxShadowOpacity={0.5}
                        showCover={true}
                        size="stretch"
                        flippingTime={1000}
                        mobileScrollSupport={true}
                        className="flip-book"
                        onFlip={onFlip}
                    >
                        {imageChunks.map((image, index) => {
                            return (
                                <div key={index}>
                                    <img
                                        src={image.src}
                                        alt={`Page ${index + 1}`}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </HTMLFlipBook>
                </div>
            </div>
            {!isLoading ? (
                <div className="container d-flex align-items-center gap-2 p-3">
                    <Button
                        variant="info"
                        onClick={() =>
                            readerRef.current?.pageFlip()?.flipPrev()
                        }
                    >
                        <FontAwesomeIcon icon={faBackward} />
                    </Button>
                    <div className="d-flex align-items-center gap-2">
                        <input
                            type="number"
                            placeholder="Go to page..."
                            min={0}
                            defaultValue={0}
                            onChange={(e) =>
                                setGoToPage(e.target.valueAsNumber)
                            }
                        />
                        <Button
                            variant="primary"
                            onClick={() =>
                                readerRef.current
                                    ?.pageFlip()
                                    .turnToPage(goToPage)
                            }
                        >
                            Go
                        </Button>
                    </div>
                    <span>
                        Showing Page {currentIndex} of {totalPages}{" "}
                    </span>
                    <Button
                        variant="info"
                        onClick={() =>
                            readerRef.current?.pageFlip()?.flipNext()
                        }
                    >
                        <FontAwesomeIcon icon={faForward} />
                    </Button>
                </div>
            ) : null}
        </div>
    );
};

const mapStateToProps = (state) => {
    const { searchBooks } = state;
    console.log(state);
    return { searchBooks };
};

export default connect(mapStateToProps, {
    findBooksWithout,
})(PDFReader);
// export default PDFReader;
