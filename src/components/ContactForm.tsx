import { useState } from "react";
import { Button, Form, Input, Row, Col, Select, message as antdMessage } from 'antd';
import { IoMdSend } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ContactUsPhoto from "../assets/banners/contactus.webp"
import SectionHeading from "./SectionHeading";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const { TextArea } = Input;

export default function ContactUs({isWithBanner = true}: {isWithBanner?: boolean}) {
    const [loading, setLoading] = useState(false);

    const onFinish = (values: any) => {
        setLoading(true);
        emailjs.init({
            publicKey: 'FbpPAzcJ50wut41r6',
            // Do not allow headless browsers
            blockHeadless: true,
        })
        emailjs.send(
            "service_29uwzfa",
            "template_6orjnf8",
            values,
        ).then(() => {
            setLoading(false);
            antdMessage.success('Message sent successfully!');
            form.resetFields();
        }).catch(() => {
            setLoading(false);
            antdMessage.error('Failed to send message. Please try again.');
        });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const [form] = Form.useForm();
    return (
        <div className="flex w-full min-h-screen h-fit mt-[50px]">
            {isWithBanner ? <LazyLoadImage src={ContactUsPhoto} alt="Contact Us Photo" className="hidden lg:flex w-1/2 h-full object-cover"/> : null}
            <div className={`w-full ${isWithBanner ? "lg:w-1/2": ""} h-full flex flex-col justify-center items-center p-4`}>
                <div className={`w-full h-full ${isWithBanner ? "max-w-[620px]" : "max-w-screen-xl"}`}>
                    <SectionHeading title="Leave us a few words" subtitle="Contact Us" align="right" className="w-full items-end"/>
                    <Form
                        form={form}
                        name="contact_form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        layout="vertical"
                        scrollToFirstError
                        className="w-full mt-[96px]"
                        autoComplete="on"
                    >
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="First name"
                                    name="firstName"
                                    rules={[{ required: true, message: 'Please input your first name!', min: 2}]}
                                    style={{ marginBottom: '20px' }}
                                >
                                    <Input disabled={loading} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Last name"
                                    name="lastName"
                                    rules={[{ required: true, message: 'Please input your last name!', min: 2 }]}
                                    style={{ marginBottom: '20px' }}
                                >
                                    <Input disabled={loading} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item
                            label="Email Address"
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                            style={{ marginBottom: '20px' }}
                        >
                            <Input disabled={loading} />
                        </Form.Item>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Company"
                                    name="company"
                                    style={{ marginBottom: '20px' }}
                                >
                                    <Input placeholder="If you are not a company, leave blank." disabled={loading} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Subject"
                                    name="subject"
                                    style={{ marginBottom: '20px'}}
                                    rules={[{ required: true, message: 'Please select subject!'}]}
                                >
                                    <Select
                                        placeholder="Select a subject"
                                        allowClear
                                        options={[
                                            { value: 'Products', label: 'Products'}, 
                                            { value: 'Electrical Service', label: "Electrical Service"},
                                            { value: 'Mechanical Service', label: "Mechanical Service"},
                                            { value: 'Spare Parts', label: "Spare Parts"},
                                            { value: 'Other', label: "Other"},
                                        ]}
                                        disabled={loading}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item
                            label="Message"
                            name="message"
                            rules={[{ required: true, message: 'Your message must be at least 25 characters.!', min: 25}]}
                            hasFeedback
                            style={{ marginBottom: '20px' }}
                        >
                            <TextArea rows={4} placeholder="Your Message..." showCount style={{ resize: 'none' }} disabled={loading} />
                        </Form.Item>
                        <Form.Item
                            label="Verification"
                            name="g-recaptcha-response"
                            rules={[{ required: true, message: "Please verify you are human"}]}
                        >
                        <ReCAPTCHA
                            sitekey="6Lc9dRcqAAAAAKkTPNtukPPcEt0Oq-APNkZw25Qs"
                            className="m-0"
                        />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" icon={<IoMdSend />} className="mt-4 px-6 py-4" loading={loading}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>        
            </div>
        </div>
    );
}
