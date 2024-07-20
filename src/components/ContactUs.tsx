import { useState } from "react";
import ContactUsPhoto from "../assets/contactus/ContactUs.png"
import { Button, Form, Input, Row, Col, Select} from 'antd';
import SectionHeading from "./SectionHeading";
import { IoMdSend } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";

type LayoutType = Parameters<typeof Form>[0]['layout'];
const { TextArea } = Input;

export default function ContactUs() {
    const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

    const onWebsiteChange = (value: string) => {
      if (!value) {
        setAutoCompleteResult([]);
      } else {
        setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
      }
    };
  
    const websiteOptions = autoCompleteResult.map((website) => ({
      label: website,
      value: website,
    }));

    const onFinish = (values:any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
    };

  return (
    <div className="flex w-full min-h-screen h-fit mt-[100px]">
        <LazyLoadImage src={ContactUsPhoto} alt="Contact Us Photo" className="hidden lg:flex w-1/2 h-full object-cover"/>
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-end p-8">
        <SectionHeading title="Leave us a few words" subtitle="Contact Us" align="right" className=""/>
        <Form
        name="contact_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        scrollToFirstError
        className="w-full mt-[96px]"
        >
        <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="First name"
            name="firstName"
            rules={[{ required: true, message: 'Please input your first name!', min: 2}]}
            style={{ marginBottom: '20px' }}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Last name"
            name="lastName"
            rules={[{ required: true, message: 'Please input your last name!', min: 2 }]}
            style={{ marginBottom: '20px' }}
          >
            <Input />
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
            <Input />
        </Form.Item>
        <Row gutter={16}>
        <Col span={12}>
            <Form.Item
                label="Company"
                name="company"
                style={{ marginBottom: '20px' }}
            >
                <Input placeholder="If you are not a company, leave blank."/>
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
                    defaultValue="products"
                    allowClear
                    options={[
                        { value: 'products', label: 'Products'}, 
                        { value: 'electrical', label: "Electrical Service"},
                        { value: 'mechanical', label: "Mechanical Service"},
                        { value: 'spare', label: "Spare Parts"},
                        { value: 'other', label: "Other"},
                    ]}
                />
            </Form.Item>
        </Col>
        </Row>
        <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: 'Your message must be at least 100 characters.!', min: 100}]}
            hasFeedback
            style={{ marginBottom: '20px' }}
        >
            <TextArea rows={4} placeholder="Your Message..." showCount style={{ resize: 'none' }}/>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" icon={<IoMdSend/>} iconPosition="end" className="mt-4 px-6 py-4">
                Submit
            </Button>
        </Form.Item>
        </Form>
        </div>
    </div>
  )
}