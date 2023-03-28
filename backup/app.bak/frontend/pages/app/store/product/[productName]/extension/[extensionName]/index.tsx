import { useRouter } from "next/router";
import AppLayout from "../../../../../../../layouts/appLayout/AppLayout";
import { NextPageWithLayout } from "../../../../../../page";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import SERVER, { verifyAndReturnJson } from "../../../../../../../server";
import { type InstalledApplication } from "types/store/installedApplication";
import Chiplet from "~/frontend/chipletui";
import Head from "next/head";
import { type InstalledApplicationExtension } from "types/store/installedApplicationExtension";

const StoreProduct: NextPageWithLayout = () => {
    const router = useRouter();
    const productId = router.query.productName;
    const extensionSlug = router.query.extensionName;

    const [product, setProduct] = useState({ name: "undefined" } as InstalledApplication & {
        uninstallable: boolean;
        installed: boolean;
    });
    const [showInstallationPopup, setShowInstallationPopup] = useState(false);
    const [pageChanging, setPageChanging] = useState(false);
    const [installationError, setInstallationError] = useState(false);
    const [uninstallationError, setUninstallationError] = useState(false);
    const [unableToLoadPopup, setUnableToLoadPopup] = useState(false);
    const [extension, setExtension] = useState(null as null | InstalledApplicationExtension);

    useEffect(() => {
        if (!productId) return;
        verifyAndReturnJson(
            SERVER.get(`/store/application/${productId}`),
            (
                json: InstalledApplication & {
                    uninstallable: boolean;
                    installed: boolean;
                }
            ) => {
                const extension = json.extensions.find((ext) => {
                    return ext.name === extensionSlug;
                });
                if (!extension) return;

                setExtension(extension);
                setProduct(json);
            },
            () => {
                console.error(`ERROR: couldn't fetch product information`);
                setUnableToLoadPopup(true);
            }
        );
    }, [productId]);

    if (unableToLoadPopup)
        return (
            <>
                <Head>
                    <title>YourDash | Store</title>
                </Head>
                <Chiplet.Card className={styles.errorPopup}>
                    <Chiplet.Column>
                        <Chiplet.Icon color="var(--card-fg)" name="server-error" />
                        <h3>Error</h3>
                        <p>The application &quot;{productId}&quot; was not found</p>
                        <Chiplet.Button
                            onClick={() => {
                                router.push(`/app/store`);
                            }}
                        >
                            Go back
                        </Chiplet.Button>
                    </Chiplet.Column>
                </Chiplet.Card>
            </>
        );

    if (product.name === "undefined")
        return (
            <Head>
                <title>YourDash | Store</title>
            </Head>
        );

    return (
        <>
            <Head>
                <title>YourDash | Store</title>
            </Head>
            <div
                className={styles.root}
                style={{
                    left: pageChanging ? "100%" : "0",
                    opacity: pageChanging ? "0" : "1",
                }}
            >
                <Chiplet.Carousel className={styles.carousel}>
                    <div
                        style={{
                            backgroundImage: `url('/background.jpg')`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    />
                </Chiplet.Carousel>
                {installationError ? (
                    <Chiplet.Card className={styles.errorPopup}>
                        <Chiplet.Column>
                            <Chiplet.Icon color="var(--card-fg)" name="server-error" />
                            <h3>Error</h3>
                            <p>The application was not installed!</p>
                            <Chiplet.Button
                                onClick={() => {
                                    setInstallationError(false);
                                }}
                            >
                                Ok
                            </Chiplet.Button>
                        </Chiplet.Column>
                    </Chiplet.Card>
                ) : null}
                {uninstallationError ? (
                    <Chiplet.Card className={styles.errorPopup}>
                        <Chiplet.Column>
                            <Chiplet.Icon color="var(--card-fg)" name="server-error" />
                            <h3>Error</h3>
                            <p>The application was not uninstalled!</p>
                            <Chiplet.Button
                                onClick={() => {
                                    setUninstallationError(false);
                                }}
                            >
                                Ok
                            </Chiplet.Button>
                        </Chiplet.Column>
                    </Chiplet.Card>
                ) : null}
                <Chiplet.Dialog
                    visible={showInstallationPopup}
                    onClose={() => {
                        setShowInstallationPopup(false);
                    }}
                    style={{
                        zIndex: 2,
                    }}
                >
                    <Chiplet.Column className={styles.installationPopupContent}>
                        <Chiplet.Row>
                            <Chiplet.Column>
                                <h1>{product.displayName}</h1>
                                <p>{product.description}</p>
                            </Chiplet.Column>
                            {product?.moduleRequirements?.length !== 0 && (
                                <ul>
                                    <h3>Requirements</h3>
                                    {product?.moduleRequirements?.map((requirement) => {
                                        return <p key={requirement}>{requirement}</p>;
                                    })}
                                </ul>
                            )}
                        </Chiplet.Row>
                        <Chiplet.Button
                            onClick={() => {
                                if (product.installed) {
                                    return;
                                } else {
                                    verifyAndReturnJson(
                                        SERVER.post(`/store/application/${productId}/install`, {
                                            body: JSON.stringify({ product: productId }),
                                        }),
                                        (data) => {
                                            if (data.installed) {
                                                setProduct({
                                                    ...product,
                                                    installed: true,
                                                });
                                                setShowInstallationPopup(false);
                                                router.reload();
                                            } else {
                                                setInstallationError(true);
                                                setShowInstallationPopup(false);
                                            }
                                        },
                                        () => {
                                            console.error(`ERROR: couldn't install product`);
                                        }
                                    );
                                }
                            }}
                            vibrant
                        >
                            Approve installation
                        </Chiplet.Button>
                    </Chiplet.Column>
                </Chiplet.Dialog>
                <section className={styles.productHeader}>
                    <section>
                        <Chiplet.IconButton
                            icon="arrow-left-16"
                            color="var(--container-fg)"
                            onClick={() => {
                                setPageChanging(true);
                                router.prefetch(`/app/store/product/${productId}`);
                                setTimeout(() => {
                                    router.push(`/app/store/product/${productId}`);
                                }, 400);
                            }}
                        />
                        <h1>{extension?.displayName}</h1>
                    </section>
                    <section>
                        <Chiplet.Button
                            disabled={product.installed ? !product.uninstallable : false}
                            onClick={() => {
                                if (!extension.installed) {
                                    setShowInstallationPopup(true);
                                } else {
                                    verifyAndReturnJson(
                                        SERVER.delete(`/store/application/${productId}/extension/${extensionSlug}`),
                                        (data) => {
                                            console.log(data);
                                            if (data.installed) {
                                                setUninstallationError(true);
                                                setProduct({
                                                    ...product,
                                                    installed: data.installed,
                                                });
                                            } else {
                                                setUninstallationError(false);
                                                setProduct({
                                                    ...product,
                                                    installed: data.installed,
                                                });
                                            }
                                        },
                                        () => {
                                            return setUninstallationError(true);
                                        }
                                    );
                                }
                            }}
                        >
                            {product.installed
                                ? product.uninstallable
                                    ? "Uninstall"
                                    : "Forcefully installed by the server"
                                : "Install"}
                        </Chiplet.Button>
                    </section>
                </section>
                <section className={styles.description} style={{ marginTop: "-3rem" }}>
                    <Chiplet.Card>
                        <p>{extension?.description}</p>
                    </Chiplet.Card>
                </section>
                <section className={styles.description}>
                    <Chiplet.Card>
                        <p>
                            Located in the &quot;{product.category}&quot; category
                            <br />
                            Part of the &quot;{product.name}&quot; application
                        </p>
                        <p>
                            Copyright: {extension?.copyright}
                            <br />
                            License: {extension?.license}
                        </p>
                    </Chiplet.Card>
                </section>
            </div>
        </>
    );
};

export default StoreProduct;

StoreProduct.getLayout = (page) => {
    return <AppLayout>{page}</AppLayout>;
};