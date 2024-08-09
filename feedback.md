1) Rate the experience : 3/5

2)Tools and resources :
      resources used :
https://docs.nillion.com/quickstart
https://docs.nillion.com/nada-lang
https://github.com/NillionNetwork/nada-ai/tree/main/examples/conv_net
https://github.com/NillionNetwork/nada-ai/blob/main/examples/conv_net/src/conv_net.py#L19C5-L19C77
https://github.com/NillionNetwork/nada-ai/tree/main/nada_ai

Tools used :

nillion sdk (nada, nillion-devnet, nilup, nillion numpy)
flask, react, github, keplr nillion testnet

3) Errors encountered :
          During our journey of developing a project on the Nillion platform, we faced several errors and challenges that tested our problem-solving skills. Each error brought its own set of hurdles, from environment setup issues to critical runtime errors. Here’s an in-depth explanation of the errors we encountered and how we managed to overcome them.

1. Invalid Output Error During Virtual Environment Setup
Issue:
The first significant challenge was the Invalid Output Error encountered while setting up the Python virtual environment. Virtual environments are essential for isolating project dependencies, but this error suggested that some files in the Python installation were corrupted.

Cause:
The error typically occurred when attempting to run commands like python3 -m venv env to create a virtual environment. Instead of proceeding smoothly, the process would halt, throwing errors that pointed to issues within the Python environment itself.

Solution:
To resolve this, we performed an update on the system and reinstalled the necessary Python components to ensure there were no corrupted files. The commands used were:

bash

sudo apt update
sudo apt install python3.10-venv
These commands updated the package list and installed the venv module for Python 3.10, ensuring that the virtual environment could be created without errors. Once this was done, the virtual environment was successfully set up, allowing us to proceed with the project.

2. Port Error While Running React Application
Issue:
While running our React application using npm start, we encountered a Port Error. The application was supposed to run on localhost:8080, as indicated by the terminal logs, but instead, it was launching on localhost:8081.

Cause:
This issue usually arises due to port conflicts where another application is already using the default port (8080). Consequently, the React application automatically shifted to the next available port, 8081.

Solution:
To resolve this, we checked which ports were being used and ensured that localhost:8080 was free before starting the application. This was done by:

Checking the processes using the ports.
Manually setting the desired port in the React application’s configuration if needed.
Using the command lsof -i :8080 to identify the process using port 8080, and then stopping it to free up the port.
This ensured that the application consistently started on localhost:8080, as required.

3. WSL Error: Switching Distributions Automatically
Issue:
While working in the Nillion environment on Windows Subsystem for Linux (WSL), we encountered an issue where the system automatically switched from the Ubuntu distribution (used for our project) to other distributions like Docker. This caused confusion and interruptions, as our project setup was specific to the Ubuntu environment.

Cause:
This error typically happens when multiple distributions are installed on WSL, and the system doesn't always default to the one intended for the current project.

Solution:
We set the Ubuntu distribution as the default for WSL to prevent accidental switching. The command used was:

bash
wsl --list --verbose
This command lists all the distributions available on WSL. We then used:

bash

wsl --set-default Ubuntu
This made Ubuntu the default distribution, ensuring that every time WSL was launched, it would start in the correct environment, thereby avoiding further interruptions.

4. Local Net Error: Nichain Proxy Launch Failure
Issue:
While deploying our blind computation application on the Nillion local network (nillion-devnet), we encountered an error during the launch of the nichain proxy. The process failed, and an error message indicated that the proxy couldn’t be launched.

Cause:
The issue was due to a conflict with an already running process that was occupying the required resources or ports, leading to the failure of the nichain proxy launch.

Solution:
To resolve this, we identified the conflicting process using the following command:

bash

ps aum | grep nillion-devnet
This command displayed the process IDs (PIDs) related to the Nillion devnet. We then terminated the conflicting process using:

bash

sudo kill -9 <pid>
This freed up the necessary resources, allowing the nichain proxy to launch successfully. Killing the conflicting process was critical for deploying the application smoothly on the local network.

5. Critical Errors: System Demands for GPU
Issue:
While running scripts that included heavy machine learning models, we encountered critical errors where the system demanded a GPU to process the operations. This was particularly problematic since not all development environments are equipped with GPU resources.

Cause:
The machine learning models used in our scripts were computationally intensive, and the CPU was insufficient to handle the load efficiently, resulting in warnings and errors.

Solution:
To handle this, we decided to suppress the warnings related to GPU usage and ensure that the system would default to CPU processing when a GPU wasn't available. The following environment variables were set to achieve this:

bash

export TF_CPP_MIN_LOG_LEVEL=3
export TF_ENABLE_ONEDNN_OPTS=0
export RUST_BACKTRACE=1

TF_CPP_MIN_LOG_LEVEL=3 reduces TensorFlow's log verbosity, minimizing the distraction from non-critical warnings.
TF_ENABLE_ONEDNN_OPTS=0 disables oneDNN optimizations that may require a GPU.
RUST_BACKTRACE=1 enables backtrace for debugging in case of Rust-based dependencies.
These commands effectively suppressed unnecessary warnings and allowed the scripts to run using the available CPU resources. Although not as fast as GPU processing, this solution enabled us to continue development without requiring immediate access to a GPU.

4) Support and Resources

Throughout these challenges, we relied heavily on several support resources:

Nillion Office Hours: Direct support from Steph Orpilla and the Nillion team was invaluable. Their guidance helped us troubleshoot specific issues, especially those unique to the Nillion environment.
Nillion Documentation: The official Nillion docs provided detailed information on setup and usage, which was crucial for resolving errors quickly.
Community Support: The Nillion Discord community was another resource where we could discuss issues and find solutions shared by others facing similar challenges.
Suggestions and Future Improvements
During the development process, one of the limitations we identified was the lack of variety in data types for handling certain file formats, such as MP4 and MP3. This limitation restricts the kinds of computations that can be performed on the Nillion environment. We suggest that future updates to the Nillion SDK include enhanced support for these file types, which would expand the platform’s capabilities and applicability in more diverse projects.



5) Suggestions and Improvements :
	For acheiving more type of computation on Nillion environment, as of now we dont have variety of data types for holding the mp4 and mp3 formats. 
	so our perspective is to sort out  this issue in the upcoming days

6)Comments on DX on Nillion :
		It is such a new experience for our team to work on the nillion, which is more concerned about the privacy and security.
We got a lot of new knowledge to work on such environment and we like to continue our journey with nillon.

Conclusion

Despite the challenges and errors we faced, our experience with the Nillion platform was ultimately rewarding. Each error taught us something new, from better managing our development environment to understanding the intricacies of deploying applications on a privacy-focused network like Nillion. The solutions we implemented not only resolved the issues but also provided us with a deeper understanding of the platform, equipping us to handle similar challenges in the future.
As we move forward, we’re excited to continue working with Nillion and exploring its full potential, especially as the platform evolves and addresses the current limitations. Our journey has just begun, and we’re eager to see where it takes us.	