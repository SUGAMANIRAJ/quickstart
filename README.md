# deepfake-nillion
HHG Project on Nillion Track

# DeepFake Detector

Welcome to Deepfake Detector!

## Features

### Real-Time Detection

- **Fast Processing:** Capable of analyzing video frames in real-time to quickly determine the authenticity of content.
- **Efficient Models:** Uses optimized models to minimize detection time without compromising accuracy.

### Privacy Preservation

- **Data Anonymization:** Ensures that user result data is processed securely, with sensitive information anonymized to protect privacy.
- **Secure Computation:** Since the computation is done through the Nillion secret datatypes, the logics and computations for results are highly secure in the Web3 space.

### Scalability

- **Cross-Platform Support:** The project is published on Vercel for cross-platform support.

## Getting Started

### Prerequisites

- WSL (Windows Subsystem for Linux)
- Git
- Python
- TensorFlow
- NumPy
- OpenCV-Python-Headless

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/SUGAMANIRAJ/quickstart.git
    ```

### Setup

1. Open WSL and run the Nillion Devnet:

    ```bash
    nillion-devnet --seed my-seed
    ```

2. Navigate to `nada_quickstart_programs` and move to `src` to run the Flask backend:

    ```bash
    python app.py
    ```

3. Navigate to `cra-nillion` to start the front-end:

    ```bash
    npm start
    ```

### Output

You can see the interface at localhost ports 8080 or 8081.
